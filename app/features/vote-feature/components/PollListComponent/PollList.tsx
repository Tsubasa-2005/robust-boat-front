import React from "react";
import PollOverview from "@/app/features/vote-feature/components/PollOverviewComponent";

interface VoteListProps {
    votes: {
        id: number;
        title: string;
        description: string;
        buttonText: string;
    }[];
}

const PollList: React.FC<VoteListProps> = ({ votes }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {votes.map((vote) => (
                <PollOverview
                    key={vote.id}
                    title={vote.title}
                    description={vote.description}
                    buttonText={vote.buttonText}
                />
            ))}
        </div>
    );
};

export default PollList;