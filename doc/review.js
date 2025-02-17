const reviewStates = [
    {isOn: false, reviewItemClass: "rv", reviewTogglerId: "reviewToggler",
        hiddenReviewClass: "hidden_review",
        showContentFunction: createShowReviewedContentFunction("hidden_review")}, 
    {isOn: false, reviewItemClass: "rv1", reviewTogglerId: "reviewToggler1",
        hiddenReviewClass: "hidden_review1",
        showContentFunction: createShowReviewedContentFunction("hidden_review1")}
]

const reviewIsOnClass = "review_is_on"
const reviewIsHiddenClass = "reviewHidden"

function createShowReviewedContentFunction(hiddenReviewClass) {
    return function () {
        if (this.classList.contains(hiddenReviewClass)) {
            this.classList.remove(hiddenReviewClass)
        } else {
            this.classList.add(hiddenReviewClass)
        }
        return false;
    }
}

function toggleReview(reviewStateIndex) {
    let reviewState = reviewStates[reviewStateIndex]
    let reviewedElements = document.getElementsByClassName(reviewState.reviewItemClass)
    
    if (reviewState.isOn) {
        for (let el of reviewedElements) {
            el.classList.remove(reviewState.hiddenReviewClass)
            el.removeEventListener("click", reviewState.showContentFunction)
            el.classList.remove(reviewIsOnClass)
        }
        document.getElementById(reviewState.reviewTogglerId).classList.remove(reviewIsHiddenClass)
        reviewState.isOn = false
    } else {
        for (let el of reviewedElements) {
            el.classList.add(reviewState.hiddenReviewClass)
            el.addEventListener("click", reviewState.showContentFunction)
            el.classList.add(reviewIsOnClass)
        }
        document.getElementById(reviewState.reviewTogglerId).classList.add(reviewIsHiddenClass)
        reviewState.isOn = true
    }
    return false
}

