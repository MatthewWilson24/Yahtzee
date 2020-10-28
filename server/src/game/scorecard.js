//The code should be able to add all the scoringCategories as keys in scores objects
//The code should be able to reset all values in the scores object
//The code should be able to sum up all the values for the top half categories to produce a topHalfSum

import { scoringCategories, topHalfCategories, bottomHalfCategories, computedCategories } from './categories.js'

export class Scorecard {
    constructor() {        
        this.scores = {}

        for (const category of scoringCategories){
            this.scores[category] = null // this.scores = {ones:null}
        }
    }

    topHalfSum() {
        let topsum = 0
        for (const category1 of topHalfCategories){
            topsum += this.scores[category1]
        }
        return topsum
    }

    bonus() {
        return (this.topHalfSum() <= 63) ? 0 : 35
    }
            
 
    topHalfTotal() {
        return this.topHalfSum + this.bonus
    }

    bottomHalfTotal() {
        let bottomSum = 0
        for (const category2 in bottomHalfCategories) {
            bottomsum += this.score[category2]
        }
        return bottomsum
    }

    overallTotal() {
        return this.topHalfTotal() + this.bottomHalfTotal()
    }

    

    toJSON() {
        const categoryList = [
            this.topHalfSum(),
            this.bonus(),
            this.topHalfTotal(),
            this.bottomHalfTotal(),
            this.overallTotal()
        ]
        const jsonList = {...this.scores}

        for (let i=0; i<computedCategories.length; i++ ){
            let bigCategory = computedCategories[i]
            jsonList[bigCategory] = this.categoryList[i]
        }
        return jsonList
    }
}