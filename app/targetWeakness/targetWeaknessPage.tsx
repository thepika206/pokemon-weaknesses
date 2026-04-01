import React from "react";
enum PkType {
  NORMAL = "normal",
  FIRE = "fire",
  WATER = "water",
  ELECTRIC = "electric",
  GRASS = "grass",
  ICE = "ice",
  FIGHTING = "fighting",
  POISON = "poison",
  GROUND = "ground",
  FLYING = "flying",
  PSYCHIC = "psychic",
  BUG = "bug",
  ROCK = "rock",
  GHOST = "ghost",
  DRAGON = "dragon",
  DARK = "dark",
  STEEL = "steel",
  FAIRY = "fairy",
}

// Lists the pokemon types and their strength and weaknesses against attack types
// strength means the attack does half damage, weakness means the attack does double damage, invulnerable means the attack does no damage
const pokeTypesDefence = [
  {
    pkType: PkType.NORMAL,
    invulnerable: [PkType.GHOST],
    strengths: [],
    weaknesses: [PkType.FIGHTING], 
  },
  {
    pkType: PkType.FIRE,
    invulnerable: [],
    strengths: [PkType.FIRE, PkType.GRASS, PkType.ICE, PkType.BUG, PkType.STEEL, PkType.FAIRY],
    weaknesses: [PkType.WATER, PkType.GROUND, PkType.ROCK],
  },
  {
    pkType: PkType.WATER,
    invulnerable: [],
    strengths: [PkType.FIRE, PkType.WATER, PkType.ICE, PkType.STEEL],
    weaknesses: [PkType.ELECTRIC, PkType.GRASS],
  },
  {
    pkType: PkType.ELECTRIC,
    invulnerable: [],
    strengths: [PkType.ELECTRIC, PkType.FLYING, PkType.STEEL],
    weaknesses: [PkType.GROUND],
  },
  {
    pkType: PkType.GRASS,
    invulnerable: [],
    strengths: [PkType.WATER, PkType.ELECTRIC, PkType.GRASS, PkType.GROUND, PkType.STEEL],
    weaknesses: [PkType.FIRE, PkType.ICE, PkType.POISON, PkType.FLYING, PkType.BUG],
  },
  {
    pkType: PkType.ICE,
    invulnerable: [],
    strengths: [PkType.ICE],
    weaknesses: [PkType.FIRE, PkType.FIGHTING, PkType.ROCK, PkType.STEEL],
  },
  {
    pkType: PkType.FIGHTING,
    invulnerable: [],
    strengths: [PkType.BUG, PkType.ROCK, PkType.DARK],
    weaknesses: [PkType.FLYING, PkType.PSYCHIC, PkType.FAIRY],
  },
  {
    pkType: PkType.POISON,
    invulnerable: [],
    strengths: [PkType.GRASS, PkType.FIGHTING, PkType.POISON, PkType.BUG, PkType.FAIRY],
    weaknesses: [PkType.GROUND, PkType.PSYCHIC],
  },
  {
    pkType: PkType.GROUND,
    invulnerable: [PkType.ELECTRIC],
    strengths: [PkType.POISON, PkType.ROCK],
    weaknesses: [PkType.WATER, PkType.ICE, PkType.GRASS],
  },
  {
    pkType: PkType.FLYING,
    invulnerable: [PkType.GROUND],
    strengths: [PkType.GRASS, PkType.FIGHTING, PkType.BUG],
    weaknesses: [PkType.ELECTRIC, PkType.ICE, PkType.ROCK],
  },
  {
    pkType: PkType.PSYCHIC,
    invulnerable: [],
    strengths: [PkType.FIGHTING, PkType.PSYCHIC],
    weaknesses: [PkType.BUG, PkType.GHOST, PkType.DARK],
  },
  {
    pkType: PkType.BUG,
    invulnerable: [],
    strengths: [PkType.GRASS, PkType.FIGHTING, PkType.GROUND],
    weaknesses: [PkType.FIRE, PkType.FLYING, PkType.ROCK],
  },
  {
    pkType: PkType.ROCK,
    invulnerable: [],
    strengths: [PkType.NORMAL, PkType.FIRE, PkType.POISON, PkType.FLYING],
    weaknesses: [PkType.WATER, PkType.GRASS, PkType.FIGHTING, PkType.GROUND, PkType.STEEL],
  },
  {
    pkType: PkType.GHOST,
    invulnerable: [PkType.NORMAL, PkType.FIGHTING],
    strengths: [PkType.POISON, PkType.BUG],
    weaknesses: [PkType.GHOST, PkType.DARK],
  },
  {
    pkType: PkType.DRAGON,
    invulnerable: [],
    strengths: [PkType.FIRE, PkType.WATER, PkType.ELECTRIC, PkType.GRASS],
    weaknesses: [PkType.ICE, PkType.DRAGON, PkType.FAIRY],
  },
  {
    pkType: PkType.DARK,
    invulnerable: [PkType.PSYCHIC],
    strengths: [PkType.GHOST, PkType.DARK],
    weaknesses: [PkType.FIGHTING, PkType.BUG, PkType.FAIRY],
  },
  {
    pkType: PkType.STEEL,
    invulnerable: [PkType.POISON],
    strengths: [PkType.NORMAL, PkType.GRASS, PkType.ICE, PkType.FLYING, PkType.PSYCHIC, PkType.BUG, PkType.ROCK, PkType.DRAGON, PkType.STEEL, PkType.FAIRY],
    weaknesses: [PkType.FIRE, PkType.FIGHTING, PkType.GROUND],
  },
  {
    pkType: PkType.FAIRY,
    invulnerable: [PkType.DRAGON],
    strengths: [PkType.FIGHTING, PkType.BUG, PkType.DARK],
    weaknesses: [PkType.POISON, PkType.STEEL],
  }
]

export function TargetWeakness() {
  const [primaryType, setPrimaryType] = React.useState<PkType | "">("");

  
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h1 className="text-4xl font-bold text-center">Welcome to Pokemon Type Weaknesses Helper</h1>
          </div>
        </header>
        <div className="max-w-[800px] w-full space-y-6 px-4">
          <section className="flex flex-col items-start rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Select the target Pokemon first type.
            </p>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={primaryType}
              onChange={(e) => setPrimaryType(e.target.value as PkType)}
            >
              <option value="">Select a type</option>
              {Object.values(PkType).map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              {primaryType
                ? `The weaknesses of ${primaryType} type are: ${
                    pokeTypesDefence.find((t) => t.pkType === primaryType)
                      ?.weaknesses.map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(", ") || "None"
                  }`
                : "Please select a type to see its weaknesses."}
            </p>
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              {primaryType
                ? `The strengths of ${primaryType} type are: ${
                    pokeTypesDefence.find((t) => t.pkType === primaryType)
                      ?.strengths.map((s) => s.charAt(0).toUpperCase() + s.slice(1))
                      .join(", ") || "None"
                  }`
                : "Please select a type to see its strengths."}
            </p>
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              {primaryType
                ? `The invulnerabilities of ${primaryType} type are: ${
                    pokeTypesDefence.find((t) => t.pkType === primaryType)
                      ?.invulnerable.map((i) => i.charAt(0).toUpperCase() + i.slice(1))
                      .join(", ") || "None"
                  }`
                : "Please select a type to see its invulnerabilities."}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}




