d166kvzst1sp4r.cloudfront.net

# CloudTask

CloudTask is a secure, fully serverless Task Management web application built natively on AWS. This project demonstrates production-ready cloud architectural practices, focusing on managed services, strict identity isolation, and global delivery.

---

## AWS Services & Core Roles

### Amazon S3
Hosts the frontend static web application files (HTML, CSS, JavaScript) cheaply and securely without the need to provision or manage any servers.

### Amazon CloudFront
Acts as the global Content Delivery Network (CDN) that sits in front of the S3 bucket. It enforces strict HTTPS security and caches files at edge locations worldwide for ultra-low latency.

### Amazon Cognito
Handles user identity and access control. It manages the entire user sign-up and login flow, and issues cryptographically signed JWT tokens to maintain secure user sessions.

### Amazon API Gateway
Serves as the single, secure entry point for all RESTful API backend requests. It handles CORS preflight operations and automatically validates incoming user tokens via a native Cognito Authorizer.

### AWS Lambda
Executes backend business logic using stateless Python handlers. Functions run purely on-demand, meaning they scale automatically with zero server maintenance overhead.

### Amazon DynamoDB
A fully managed NoSQL database that stores all user tasks. It ensures ultra-fast, predictable $O(1)$ performance using a composite primary key design (`userId` as Partition Key, and `taskId` as Sort Key).

---

## Security Implementations

* **Least Privilege Access:** All backend AWS Lambda functions are strictly bound to IAM execution roles that allow data manipulation *only* within the specific `cloudtask-db` table ARN.
* **Edge Source Protection:** The origin S3 bucket is blockaded from direct internet traffic. Users are strictly forced to route through CloudFront to access application assets.
* **Gateway-Level Access Control:** All stateful API routes (`POST`, `GET`, `PUT`, `DELETE`) are locked. Malicious or unauthenticated traffic is blocked immediately at the API Gateway level before consuming backend compute resources.

---

## Repository Structure

```text
├── frontend/             # HTML, CSS, and Vanilla JS (Cognito SDK & API fetch)
├── backend (serverless)/ # Backend Python handlers (get, create, update, delete)
└── docs/                 # IAM Policies and S3 Bucket Policies (JSON)
