// AWS Configuration
// INSTRUCTIONS: Replace these values with your actual AWS resource IDs after deployment

const AWS_CONFIG = {
  // Cognito Configuration
  region: "", // Change this to your AWS region
  userPoolId: "", // Replace with your Cognito User Pool ID
  userPoolWebClientId: "", // Replace with your App Client ID

  // API Gateway Configuration
  apiEndpoint: "", // Replace with your API Gateway invoke URL
};

// DO NOT EDIT BELOW THIS LINE
window.AWS_CONFIG = AWS_CONFIG;
