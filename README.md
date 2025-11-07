# 🔗 Linkify — Serverless URL Shortener with QR Code

A fully **serverless URL shortener** built on **AWS**, featuring **automatic redirect hosting**, **QR code generation**, and a **modern responsive frontend** — all without managing any servers.

This project demonstrates how **AWS services** can be integrated to create a real-world, scalable microservice-based system.

---

## 🧭 Table of Contents

* [Overview](#overview)
* [Architecture](#architecture)
* [How It Works](#how-it-works)
* [Tech Stack](#tech-stack)
* [Setup Guide](#setup-guide)
* [Demo Flow](#demo-flow)
* [Future Enhancements](#future-enhancements)
* [Contributors](#contributors)

---

## 🌐 Overview

**Linkify** allows users to:

* Shorten long URLs into tiny links.
* Automatically generate a **QR code** for each shortened link.
* Host and redirect requests **without a backend server**.
* Enjoy a **clean, professional frontend** built with HTML, CSS, and JavaScript.

> Example:
> Input → `https://youtube.com/watch?v=abcd1234`
> Output →
> 🔹 Short URL: `https://linkify.dev/xA12B`
> 🔹 QR Code: ![QR Example](https://linkify-qrcodes.s3.amazonaws.com/xA12B.png)

---

## 🏗️ Architecture

```
+------------------------+
|  🌐 S3 Static Website  |
|  (Frontend UI)         |
+-----------+------------+
            |
            | POST /shorten
            ▼
+------------------------+
| 🚪 API Gateway         |
| (Triggers Lambda)      |
+-----------+------------+
            |
            ▼
+------------------------+
| 🧠 Lambda Function     |
|  - Generates Short ID  |
|  - Stores Mapping      |
|  - Creates Redirect    |
|  - Generates QR Code   |
+-----------+------------+
     |             |
     ▼             ▼
[DynamoDB]     [S3 Buckets]
(mapping)      (redirect + QR)
```

---

## ⚙️ How It Works

| Step | Description                          | AWS Service         |
| ---- | ------------------------------------ | ------------------- |
| 1️⃣  | User submits long URL from frontend  | S3 (Static Website) |
| 2️⃣  | API Gateway triggers Lambda          | API Gateway         |
| 3️⃣  | Lambda generates short ID            | Lambda              |
| 4️⃣  | Lambda saves mapping                 | DynamoDB            |
| 5️⃣  | Lambda creates redirect object       | S3 Redirect Bucket  |
| 6️⃣  | Lambda generates and uploads QR code | S3 QR Bucket        |
| 7️⃣  | Lambda returns short URL + QR URL    | API Gateway         |
| 8️⃣  | Frontend displays result to user     | S3 Frontend         |

---

## 🧰 Tech Stack

**Frontend:**

* HTML5, CSS3, JavaScript
* Animations for professional UI

**Backend (Serverless):**

* AWS Lambda (Node.js)
* Amazon API Gateway
* Amazon DynamoDB
* Amazon S3 (Static + Redirect + QR Storage)
* AWS SDK (for S3 & DynamoDB operations)
* `qrcode` NPM library for QR generation

---

## 🚀 Setup Guide

### 1️⃣ Clone Repository

```bash
git clone https://github.com/anand-raval-git/serverless-url-shortener.git
cd serverless-url-shortener
```

### 2️⃣ Deploy Frontend

* Create an **S3 bucket** (e.g., `linkify-frontend`)
* Enable **static website hosting**
* Upload your `index.html`, `style.css`, and `script.js`

### 3️⃣ Create API Gateway

* Create a **POST** method endpoint `/shorten`
* Connect it to your Lambda function

### 4️⃣ Lambda Setup

* Runtime: **Node.js 20.x**
* Add environment variables:

  ```bash
  REDIRECT_BUCKET=linkify-redirect
  QR_BUCKET=linkify-qrcodes
  TABLE_NAME=LinkifyTable
  ```
* Deploy the function code

### 5️⃣ DynamoDB Table

| Attribute  | Type                   |
| ---------- | ---------------------- |
| `short_id` | String (Partition Key) |
| `long_url` | String                 |

### 6️⃣ S3 Buckets

* **Redirect Bucket**: Enable static website hosting, use metadata redirect.
* **QR Bucket**: Public read access for QR images.

---

## 🎥 Demo Flow

1. User opens the Linkify web app.
2. Enters a long URL → clicks “Shorten”.
3. The short link + QR code appear instantly.
4. Visiting short URL redirects via S3.
5. Scanning QR code redirects via the same short link.

---

## 🔮 Future Enhancements

* 🔐 Add user authentication (Cognito)
* 📊 Add analytics (click tracking)
* 📱 Generate branded short domains
* 🧩 Integrate AI to detect fake or malicious links

---

## 👨‍💻 Contributors

**Anand Raval**
3rd Year Computer Engineering Student @ Marwadi University
🌩️ AWS & DevOps Enthusiast | ☁️ Cloud Learner | 💻 Open Source Contributor
GitHub: [anand-raval-git](https://github.com/anand-raval-git)

---

⭐ *If you like this project, please star the repo!*
📢 *Contributions and suggestions are welcome.*
