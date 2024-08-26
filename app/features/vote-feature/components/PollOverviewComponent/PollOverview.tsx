import React from "react";

export interface VoteCardProps {
    title: string;
    description: string;
    buttonText: string;
}

const PollOverview: React.FC<VoteCardProps> = ({ title, description }) => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <h1 className="text-xl font-semibold text-gray-900 mb-3">{title}</h1>
            <p className="text-base text-gray-700 mb-4">{description}</p>
            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200">
                Learn More
            </button>
        </div>
    );
};

export default PollOverview;