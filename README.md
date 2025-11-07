# Serverless URL Shortener using S3, Lambda, DynamoDB, and API Gateway

## Summary
This project is a simple yet powerful **AWS Serverless URL Shortener** built as part of a university major project.  
It uses **Amazon S3** for hosting and redirection, **AWS Lambda** for backend logic, **API Gateway** for secure request handling, and **DynamoDB** for storing short and long URL mappings.  

The main idea behind this project was to understand how different AWS microservices can communicate with each other in a serverless way and build a real-world application without using any dedicated servers. It’s lightweight, scalable, and can handle thousands of requests with minimal cost.

## Design
<img width="1526" height="749" alt="Screenshot 2025-11-02 190425" src="https://github.com/user-attachments/assets/c7416910-bd88-4d7f-a23f-2b78660d9aab" />
The system flow is straightforward:
- The **frontend** (React + Vite) is hosted on **S3** and lets users enter long URLs.
- The **API Gateway** receives the request and triggers a **Lambda** function.
- The Lambda function generates a unique short code and stores it in **DynamoDB**.
- For redirection, **S3** can handle static link redirects using metadata or custom logic in Lambda.
- This setup helps reduce costs while maintaining good performance.

We also planned to integrate more microservices like analytics tracking, user authentication, and domain-based short URLs to make it more production-ready.  

This project helped us explore AWS cloud concepts like event-driven architecture, NoSQL storage, and serverless web hosting in an easy, hands-on way.

## Componets
1. Setup S3 bucket
   <img width="1919" height="961" alt="Screenshot 2025-11-07 233635" src="https://github.com/user-attachments/assets/88494bd7-4ff3-4b26-8bfe-210c5857f03a" />
2. Setup a DynamoDB table to keep an atomic counter
   <img width="1915" height="961" alt="Screenshot 2025-11-07 234651" src="https://github.com/user-attachments/assets/f59ace90-f799-461e-bb2c-e8077df7d9b1" />
3. S3 Bucket Policy for public access
  <img width="1918" height="967" alt="Screenshot 2025-11-07 233649" src="https://github.com/user-attachments/assets/75040fef-35b6-4771-8869-25b26849a8de" />  
4. Create Lambda function to create the shortened key and save an object to S3
   <img width="1913" height="970" alt="image" src="https://github.com/user-attachments/assets/52829a3d-d7f3-4f1d-94a3-2efc38e093fe" />
5. Create API Gateway to front the Lambda routine for the POST
 <img width="1917" height="963" alt="Screenshot 2025-11-07 234604" src="https://github.com/user-attachments/assets/6965da36-7664-4b87-96c9-102773b9ad33" />
6. Use the S3 Lifecycle config to purge out links past a certain age
7. Get Shorten URL
