export type habitItem = {
    motivateQuote: string,
    timesPerWeek: Number,
    color: string,
    time: Date
    completedItems: completedItem[]
}

export type completedItem = {
    year: Number,
    month: Number,
    day: Number
}