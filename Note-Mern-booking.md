## MERN BOOKING WEBSITE

## ================== MONGODB QUERIES ====================
// populate("reviews") will retrieve all reviews related to each tour if it got inside it, by using reviews ids inside reviews[] 
# const tours = await Tour.find({}).skip(page * 8).limit(8).populate("reviews");


## ================== ROUTERS FEAT ====================
// verifyAdmin will check if connected user is authenticated as admin
# router.post('/new', verifyAdmin, createTour);


### Tasks
- stoped at reviews routes set up

- check instructions inside authController (login function)
- check verifyToken function too
