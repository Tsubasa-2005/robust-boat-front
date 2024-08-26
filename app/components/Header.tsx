import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <header className="flex justify-between items-center py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold">Robust Boat</h1>
            <div>
                <Button variant="outline">ログイン</Button>
                <Button className="ml-2">新規登録</Button>
            </div>
        </header>
    );
}
