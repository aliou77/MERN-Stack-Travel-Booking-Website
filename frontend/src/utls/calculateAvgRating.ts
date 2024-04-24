export default function calculateAvgRating(reviews: any){

    const totalRating = reviews && reviews?.reduce((rcc, item) => rcc + item.rating, 0);
    const avgRating = totalRating === 0 ? 0 : totalRating === 1 ? totalRating : totalRating / reviews?.length

    return {
        totalRating,
        avgRating
    }
}