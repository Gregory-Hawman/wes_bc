# APIs

API is a pretty loaded word in tech. It means "Application Programming Interface", which can mean almost anything.

## CRUD

Create
Read
Update
Delete

## REST

REpresentational State Transfer is a way of designing a back-end API with a common pattern so that developers know how to use it without having to learn much. It's essentially just a way of organizing and defining the URL pattern.

Typically a REST back-end has 7 things you can do, all in service of enabling engineers to perform CRUD operations on data. We'll get into all 7 things later and just focus on READ for right now.

A REST API is usually split up into different resources. These resources typically represent one database table, which we will cover later.

2 ways to read data usually.
1. Get multiple items from a resource GET request to `baseUrl/resourceName`
1. Get a single item from a resource GET request to `baseUrl/resourceName/resourceId`

### URL Parameters

Sometimes there are additional parameters added to a request. In a GET request, we add these to the URL directly using the following syntax `baseUrl/resourceName?paramOne=paramValue&paramTwo=paramValue&paramThree=paramValue`.

? just tells the back-end that params are coming
& separates different parameters
paramName=paramValue gives name/value pairs to the back-end

## AJAX

Asynchronous JavaScript and XML