import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Projects = () => { 
    return (
        <section>
            <div className="flex flex-nowrap items-center justify-between">
                <p className="font-semibold mt-5 mb-10 text-2xl"> my projects </p>
            </div>

            <div className='flex flex-nowrap justify-between'> 
                <p className="font-semibold"> Spam Email Classification </p>
                <a href="https://github.com/raramos9/spam" target="_blank" rel="noopener noreferrer">
                    <MdArrowOutward />
                </a>
            </div>

            <ul className="flex flex-col">
                <li className="text-sm text-[#d4d4d8af]">  Python, Pandas, Scikit Learn, Logistic Regression, Feature Engineering </li>
            </ul>
            <p className="py-5 text-[#d4d4d8af]"> Processed 10k+ labeled/unlabeled samples, engineered features 
                (e.g., one-hot encoding), and implemented logistic regression for spam email classification, 
                achieving ~90% training accuracy. Tuned hyperparameters using GridSearchCV, 
                evaluated performance with metrics (accuracy, precision, recall, F1), and visualized the 
                ROC curve for comprehensive model assessment.
            </p>


            <div className='flex flex-nowrap justify-between mt-5'> 
                <p className="font-semibold"> Sign Sage</p>
                <a href="https://github.com/iRimpo/calhacks2023" target="_blank" rel="noopener noreferrer">
                    <MdArrowOutward />
                </a>
            </div>

             <ul className="flex flex-col">
                <li className="text-sm text-[#d4d4d8af]"> TensorFlow, OpenCV, Flask, Mediapipe, LabelImg, Python </li>
            </ul>
            <p className="py-5 text-[#d4d4d8af]"> Implemented real-time ASL detection with Flask, OpenCV, and Mediapipe, 
                creating a web app that streams and processes video input for facial and hand landmarks. Used OpenCV to capture 
                images for training a TensorFlow Object Detection model, applying transfer learning for improved efficiency. 
                Configured the model pipeline for efficient training and optimized TensorFlow for custom detection tasks.
            </p>
        </section>
    ) 
}

export default Projects