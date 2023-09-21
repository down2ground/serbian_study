var reviewIsOn = false
var hiddenReviewClass = "hidden_review"
var reviewIsOnClass = "review_is_on"
function toggleReview() {
    let reviewedElements = document.getElementsByClassName("rv")
    if (reviewIsOn) {
        for (let el of reviewedElements) {
            el.classList.remove(hiddenReviewClass)
            el.removeEventListener("click", showRevewedContent)
            el.classList.remove(reviewIsOnClass)
        }
        document.getElementById("reviewToggler").classList.remove("reviewHidden")
        reviewIsOn = false
    } else {
        for (let el of reviewedElements) {
            el.classList.add(hiddenReviewClass)
            el.addEventListener("click", showRevewedContent)
            el.classList.add(reviewIsOnClass)
        }
        document.getElementById("reviewToggler").classList.add("reviewHidden")
        reviewIsOn = true
    }
    return false
}

function showRevewedContent() {
    if (this.classList.contains(hiddenReviewClass)) {
        this.classList.remove(hiddenReviewClass)
    } else {
        this.classList.add(hiddenReviewClass)
    }
    return false
}
