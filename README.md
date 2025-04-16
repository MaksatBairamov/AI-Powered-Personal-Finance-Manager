# AI-Powered Personal Finance Manager

## Overview
The AI-Powered Personal Finance Manager is a web-based platform that empowers users to manage their personal finances intelligently. Leveraging machine learning, the application automatically categorizes transactions, analyzes spending patterns, and delivers personalized financial advice—helping you save money and make well-informed financial decisions.

## Key Features
- **User Authentication:** Secure login and registration using JWT.
- **Dashboard:** A real-time overview displaying your account balance, recent transactions, and monthly summaries.
- **Transaction Categorization:** Automatic classification of transactions via machine learning models.
- **Spending Analysis:** Detailed insights into spending habits with customizable daily, weekly, and monthly reports.
- **Budget Management:** Set, manage, and track budgets against actual spending.
- **Savings Recommendations:** Tailored advice on saving money based on your financial behavior.
- **Notifications & Alerts:** Real-time alerts for upcoming bills, budget threshold breaches, and unusual spending.
- **Data Visualization:** Interactive charts and graphs to help visualize your spending trends.

## Technologies Used
- **Backend:** Python with Flask or Django
- **Frontend:** React, HTML5, CSS, JavaScript
- **Database:** MySQL or PostgreSQL
- **Machine Learning:** Scikit-Learn, TensorFlow
- **API Integration:** Plaid or Yodlee (secure transaction data fetching)
- **Data Visualization:** Chart.js and D3.js
- **Deployment:** AWS, Google Cloud, or Heroku

## Getting Started

### Prerequisites
- Python 3.x  
- Node.js and npm  
- MySQL or PostgreSQL

### Installation

#### 1. Clone the Repository
```bash
git clone https://github.com/MaksatBairamov/ai-powered-finance-manager.git
cd ai-powered-finance-manager
```

2. Backend Setup
Navigate to the backend directory:
```
cd backend
```
Create and activate a virtual environment:

```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

Install Python dependencies:
```
pip install -r requirements.txt
```
Set up the database:

```
# For Django:
python manage.py migrate
```

```
# For Flask:
flask db upgrade
```

Start the backend server:

```
# For Django:
python manage.py runserver
```
```
# For Flask:
flask run
```


3. Frontend Setup
Navigate to the frontend directory:

```
cd ../frontend
```
Install npm packages:
```
npm install
```

Start the frontend server:
```
npm start
```

API Configuration
Sign up and acquire API keys from Plaid or Yodlee.

Configure the backend by adding your API keys to the .env file in the backend directory:

PLAID_CLIENT_ID=your-client-id
PLAID_SECRET=your-secret
Usage
Register/Login: Sign up or log in to access your personalized dashboard.

Connect Bank Account: Securely connect your bank account to automatically fetch transactions.

Manage Finances: View categorized transactions, analyze spending patterns, and track your budgets.

Receive Insights: Get personalized savings recommendations and real-time notifications for enhanced financial management.

Project Dependencies
Frontend
The package.json includes the following key dependencies:
```{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.7",
    "bootstrap": "^5.3.3",
    "chart.js": "^4.4.4",
    "d3": "^7.9.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-scripts": "^3.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

Backend
Key Python packages for the backend include:
```
Django>=3.2 or Flask (choose based on your stack)

djangorestframework>=3.12 (if using Django)

scikit-learn

tensorflow

pandas

numpy

plaid-python
```
Contributing
Contributions are welcome! To contribute:

Fork the repository.

Create a new branch:
```
git checkout -b feature-branch
```
Commit your changes:

```
git commit -m 'Add new feature'
```
Push your branch:
```
git push origin feature-branch
```
Open a Pull Request for review.

License
This project is licensed under the MIT License.

Contact
For any questions or support, please contact:

**Maksat Bairamov**
- **Email:** bairamov.maksat@gmail.com
- **LinkedIn:** Maksat Bairamov

Acknowledgments
Plaid: For providing secure financial data APIs.

React: For the powerful frontend framework.

Flask/Django: For robust backend web development.
