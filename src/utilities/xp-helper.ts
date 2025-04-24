import xpConfig from "~/data/xp-config.json";
import deathDataRaw from "~/data/deaths-flat-data.json";

type DeathEntry = {
  season: number;
  episode: number;
  name: string;
  alias: string | null;
  sex: string;
  isNight: boolean | null;
  killer: string;
  affiliation: string | null;
  timecode: string | null;
  method: string;
  methodCount: number | string;
  methodLocation: string[];
  weapon: string;
  noise: string;
  envMods: string[];
  isKilled: boolean;
  witnessKill: boolean;
  notes: string | null;
  style: string | null;
};

const deaths = deathDataRaw;

// --------------------------------------------------
// XP STATS - Total XP - no breakdown
// --------------------------------------------------

export const getTotalXP = ({
  deathData,
  name,
}: {
  deathData: DeathEntry[];
  name?: string;
}) => {
  const kills = deathData.filter(
    (death) => death.isKilled && death.killer === (name ?? "Jack Reacher"),
  );

  const coreXP = kills.reduce((acc: number, kill) => {
    const xp =
      xpConfig["coreMethods"].find((entry) => entry.method === kill.method)
        ?.xp ?? 0;
    return acc + Number(xp);
  }, 0);

  const envXP = kills.reduce((acc: number, kill) => {
    kill.envMods.forEach((mod) => {
      const xp =
        xpConfig["envMods"].find((entry) => entry.tag === mod)?.xp ?? 0;
      acc += Number(xp);
    });
    return acc;
  }, 0);

  const killsPerEpisode = kills.reduce(
    (acc, kill) => {
      const key = `${kill.season}-${kill.episode}`;
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const comboXP = Object.values(killsPerEpisode).reduce((total, count) => {
    const applicableBonuses = xpConfig.comboBonuses
      .filter((c) => count >= c.streak)
      .map((c) => c.xp);

    return total + applicableBonuses.reduce((sum, xp) => sum + xp, 0);
  }, 0);

  const styleXP = kills.reduce((acc: number, kill) => {
    const xp =
      xpConfig["executionStyles"].find((entry) => entry.tag === kill.style)
        ?.xp ?? 0;
    return acc + Number(xp);
  }, 0);

  return {
    totalXP: coreXP + envXP + comboXP + styleXP,
    coreXP,
    envXP,
    comboXP,
    styleXP,
  };
};

// --------------------------------------------------
// XP STATS - Full breakdown
// --------------------------------------------------

export const getXPStats = ({
  deathData,
  name = "Jack Reacher",
}: {
  deathData: DeathEntry[];
  name?: string;
}) => {
  const kills = deaths.filter(
    (death) => death.isKilled && death.killer === name,
  );

  const coreTags: string[] = [];

  const methods = Object.entries(
    kills.reduce((acc: Record<string, number>, kill) => {
      const method = kill.method;
      acc[method] = (acc[method] ?? 0) + 1;
      return acc;
    }, {}),
  ).map(([method, count]) => ({
    method,
    count,
  }));

  const coreXP = kills.reduce((acc: number, method) => {
    coreTags.push(
      xpConfig.coreMethods.find((entry) => entry.method === method.method)
        ?.method ?? "",
    );
    const xp =
      xpConfig.coreMethods.find((entry) => entry.method === method.method)
        ?.xp ?? 0;

    return acc + Number(xp);
  }, 0);

  const coreMethods = xpConfig.coreMethods
    .filter((cfg) => methods.some((m) => m.method === cfg.method))
    .map(({ method, xp }) => {
      const count = methods.find((m) => m.method === method)?.count ?? 0;
      return {
        method,
        count,
        singleXP: Number(xp),
        totalXP: count * Number(xp),
      };
    });

  //   console.log("coreTags", coreTags);
  //   console.log("coreMethods", coreMethods);
  //   console.log("coreXP", coreXP);

  const envTags: string[] = [];

  const envXP = kills.reduce((acc: number, kill) => {
    kill.envMods.forEach((mod) => {
      envTags.push(
        xpConfig.envMods.find((entry) => entry.tag === mod)?.tag ?? "",
      );
      const xp = xpConfig.envMods.find((entry) => entry.tag === mod)?.xp ?? 0;
      acc += Number(xp);
    });
    return acc;
  }, 0);

  const envMods = xpConfig.envMods
    .filter((cfg) => envTags.some((tag) => tag === cfg.tag))
    .map(({ tag, xp }) => {
      const count = kills.reduce((acc: number, kill) => {
        const modCount = kill.envMods.filter((mod) => mod === tag).length;
        return acc + modCount;
      }, 0);
      return {
        tag,
        count,
        singleXP: Number(xp),
        totalXP: count * Number(xp),
      };
    });

  //   console.log("envXP", envXP);
  //   console.log("envTags", envTags);
  //   console.log("envMods", envMods);

  const comboTags: string[] = [];

  const killsPerEpisode = kills.reduce(
    (acc, kill) => {
      const key = `${kill.season}-${kill.episode}`;
      acc[key] = (acc[key] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const comboXP = Object.values(killsPerEpisode).reduce((total, count) => {
    const applicableBonuses = xpConfig.comboBonuses
      .filter((c) => count >= c.streak)
      .map((c) => c.xp);

    return total + applicableBonuses.reduce((sum, xp) => sum + xp, 0);
  }, 0);

  const comboBonuses = xpConfig.comboBonuses
    .filter((cfg) =>
      Object.values(killsPerEpisode).some((c) => c >= cfg.streak),
    )
    .map(({ tag, streak, xp }) => {
      comboTags.push(tag);
      const count = Object.values(killsPerEpisode).filter(
        (k) => k >= streak,
      ).length;
      return {
        tag,
        streak,
        count,
        singleXP: Number(xp),
        totalXP: count * Number(xp),
      };
    });

  console.log("comboXP", comboXP);
  //   console.log("comboTags", comboTags);
  console.log("comboMods", comboBonuses);

  const styleTags: string[] = [];
  const styleXP = kills.reduce((acc: number, kill) => {
    const styleEntry = xpConfig.executionStyles.find(
      (entry) => entry.tag === kill.style,
    );
    if (styleEntry) {
      styleTags.push(styleEntry.tag);
      acc += Number(styleEntry.xp);
    }
    return acc;
  }, 0);

  const styleBonuses = xpConfig.executionStyles
    .filter((cfg) => styleTags.some((tag) => tag === cfg.tag))
    .map(({ tag, xp }) => {
      const count = kills.reduce((acc: number, kill) => {
        const modCount = kill.style === tag ? 1 : 0;
        return acc + modCount;
      }, 0);
      return {
        tag,
        count,
        singleXP: Number(xp),
        totalXP: count * Number(xp),
      };
    });

  //   console.log("styleXP", styleXP);
  //   console.log("styleTags", styleTags);
  //   console.log("styleBonuses", styleBonuses);

  return {
    core: coreMethods,
    coreXP: coreXP,
    env: envMods,
    envXP: envXP,
    combo: comboBonuses,
    comboXP: comboXP,
    style: styleBonuses,
    styleXP: styleXP,
    totalXP: coreXP + envXP + comboXP + styleXP,
  };
};
