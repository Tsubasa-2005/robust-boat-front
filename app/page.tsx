import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PollOverview from "@/app/features/vote-feature/components/PollOverviewComponent";

export default function HomePage() {
  const voteData = [
    { id: 1, title: "投票タイトル 1", description: "これは投票タイトル 1 の説明です。", buttonText: "詳細を見る" },
    { id: 2, title: "投票タイトル 2", description: "これは投票タイトル 2 の説明です。", buttonText: "詳細を見る" },
    { id: 3, title: "投票タイトル 3", description: "これは投票タイトル 3 の説明です。", buttonText: "詳細を見る" },
    { id: 4, title: "人気の投票タイトル 1", description: "これは人気の投票タイトル 1 の説明です。", buttonText: "詳細を見る" },
    { id: 5, title: "人気の投票タイトル 2", description: "これは人気の投票タイトル 2 の説明です。", buttonText: "詳細を見る" },
  ];

  return (
      <div className="container mx-auto p-6">
        <Header />
        <main>
          <section className="my-8">
            <h2 className="text-xl font-semibold mb-4">最新の投票</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {voteData.slice(0, 3).map((vote) => (
                  <PollOverview
                      key={vote.id}
                      title={vote.title}
                      description={vote.description}
                      buttonText={vote.buttonText}
                  />
              ))}
            </div>
          </section>

          <section className="my-8">
            <h2 className="text-xl font-semibold mb-4">人気のある投票</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {voteData.slice(3).map((vote) => (
                  <PollOverview
                      key={vote.id}
                      title={vote.title}
                      description={vote.description}
                      buttonText={vote.buttonText}
                  />
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}