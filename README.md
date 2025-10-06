Serverless URL Shortner using S3, Lambda, DynamoDB and API Gateway
Summary
There are many URL shortners out there implemented in PHP, Node, Ruby, etc. Dave Konopka has also created a really neat verion using the AWS components of Lambda, Dynamo and the API gateway with a ridiculously cheap operating cost...about $5.12 per month to support 1 million hits. (http://www.davekonopka.com/2016/serverless-aws-lambda-api-gateway.html)

I wanted to see if I could go a slightly differnt route--partly as a traning excercise, partly to see if I could come up with a less costly way but mostly because I like finding new ways to leverage AWS functionality--aka "hack the system".

Design
In Dave's example, he uses API Gateway to front-end both the POST (convert a normal URL to shortened URL) and GET (translate the short URL into the original URL), returning a nifty redirect HTTP code to the client.

The only problem I see is what if a few tiny URL's go absolutely viral?! All of the services used for the GET would be hit and costs would go up... We'd be talking what....$6 or even $7 dollars now? Wow, maybe some of you can simply absorb those extra $2 dollars but not me....No Sir!

Instead, I wanted to offload the GET portion from API Gateway, Lambda and Dynamo and use S3. Originally, I had the idea of generating an HTML file for each POST that used META REFRESH or some Javascript. Then I figured out that we can tell S3 to redirect right in the object metadata itself.

So, we'd be able to create a zero-byte file that contained the Website Redirect metadata to forward the client using the short URL to the original URL. As a result, 1 million GET's from S3 is about $0.40. We'd still do the POSTs via API Gateway and Lambda then use DynamoDB to keep a counter to encode as the short URL (actually the zero-byte object on S3). We also want to purge out old URL's when they get past a certain age.

Componets
Setup S3 bucket
Setup a DynamoDB table to keep an atomic counter
Create basic IAM role for our Lambda routine
Create Lambda function to create the shortened key and save an object to S3
Create API Gateway to front the Lambda routine for the POST
Assign custom URL to S3 path
Use the S3 Lifecycle config to purge out links past a certain age
Profit!
