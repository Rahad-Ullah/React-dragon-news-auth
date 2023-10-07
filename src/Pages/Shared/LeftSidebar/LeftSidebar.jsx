import { useEffect, useState } from "react";

const LeftSidebar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-xl font-semibold mb-5">All Category</h2>
            <div className="space-y-1">
                {
                    categories.map(category => <button key={category.id} className="block btn btn-ghost w-full normal-case text-start text-lg font-medium text-[#9F9F9F] hover:text-[#313131]">{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default LeftSidebar;