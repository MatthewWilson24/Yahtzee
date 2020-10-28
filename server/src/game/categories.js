export const topHalfCategories = [
    "ones",
    "twos",
    "threes",
    "fours",
    "fives",
    "sixes"
]

export const bottomHalfCategories = [
    "threeOfAKind",
    "fourOfAKind",
    "fullHouse",
    "lowStraight",
    "highStraight",
    "yahtzee",
    "chance"
]

export const scoringCategories = [
    ...topHalfCategories,
    ...bottomHalfCategories
]

export const computedCategories = [
    "topHalfSum",
    "bonus",
    "topHalfTotal",
    "bottomHalfTotal",
    "overallTotal"
]

export const allCategories = [
    ...scoringCategories,
    ...computedCategories
]