export const PROJECTS = [
    {
        id: 0,
        name: "Meal Intake Detection based on variations in Glucose Level",
        description: "Developed a computing system that can understand variations in glucose level corresponding to the meal intake, calculate the amount of insulin needed to keep the glucose level optimum, and inject insulin as needed. The data was collected from continuous glucose monitoring devices of five patients, which checked their glucose levels every five minutes. This time-series data also provided information about the Bolus and Basal insulin injected at various points of time. Bolus is the amount of insulin taken by the patient himself before a meal after factoring the number of calories which he will take and the requisite insulin amount needed to keep the glucose levels normal. Basal insulin is injected by the device during continuous monitoring.",
        githubLink: "https://github.com/debarshi25/Meal-Intake-Detection-based-on-variations-in-Glucose-Level"
    },
    {
        id: 1,
        name: "Spatial Hotspot Analysis using Apache Spark",
        description: "Implemented a project using SparkSQL which involves developing and running multiple spatial queries on a major taxicab firm’s database that contains geographic and real-time location data of their customers, with the goal of extracting data from the database to identify statistically significant hot spots of taxi-traffic in different areas that will be useful for operational and strategic level decisions.",
        githubLink: "https://github.com/debarshi25/Spatial-Hotspot-Analysis-using-Apache-Spark"
    },
    {
        id: 2,
        name: "Image-based Product Recommendation System",
        description: "Developed a Recommendation System for online shopping platform using Convolutional Neural Networks and k-means clustering algorithm which takes product images as input and suggests similar products that the customers might like to buy.",
        githubLink: "https://github.com/debarshi25/Image-based-Product-Recommendation-System"
    },
    {
        id: 3,
        name: "Robot Delivery System",
        description: "Implemented a multi-agent robot delivery system using ROS, Gazebo, and Metric-FF planner. The environment consists of a set of houses as delivery locations, a set of robots, and a set of packages of varying sizes having different load locations and target delivery locations. The task is to coordinate the robots for loading the packages and delivering them to their respective target locations, with constraints defined such that though each robot can carry multiple packages, but the total number of packages being carried by a robot is restricted by the sum of the sizes of all packages that the robot is carrying, and the robot can no longer operate once the limit of movement cost has been reached.",
        githubLink: "https://github.com/debarshi25/Robot-Delivery-System"
    },
    {
        id: 4,
        name: "Semi-supervised learning using Convolutional Neural Network",
        description: "Implemented Semi-supervised learning algorithms such as Entropy Minimization, CutMix, and MixUp using Convolutional Neural Networks on the CIFAR-10 dataset by varying the number of labeled and unlabeled samples in the training data set, tested the performance of the model using the test set and presented results in terms of classification accuracies, confusion matrices and loss function plots.",
        githubLink: "https://github.com/debarshi25/Semi-supervised-learning-using-Convolutional-Neural-Network"
    }
];
