// Entry for make.fun's "Pigeon Pitch, One Line" bounty: one line, 200
// characters at most, the elevator pitch a city pigeon gives investors
// for its startup. PigeonPost delivers messages across the city for
// breadcrumbs: zero emissions, one hundred percent coo, and a perfect
// delivery record if you do not count the parcels it ate. The joke is
// the startup voice — metrics, mission, and a flaw admitted so casually
// it sounds like a feature — coming out of a pigeon. Running the program
// prints the pitch, and nothing else.

/** The pigeon's elevator pitch. */
function jokeLine(): string {
  return "PigeonPost: we deliver your messages across the city for breadcrumbs — zero emissions, 100% coo, and we've never lost a parcel, only eaten a few.";
}

const line = jokeLine();
// The brief caps the pitch at one line of at most 200 characters:
// fail loudly instead of silently printing a pitch that breaks the rules.
if (line.length > 200 || line.includes("\n")) {
  throw new Error("Pigeon pitch breaks the one-line, 200-character brief.");
}

console.log(line);
