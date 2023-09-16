

const StatsItem = ({ count, title, icon: Icon, color, bcg }) => {
    return (
        <div
            className="bg-white py-8 px-8 flex-1 rounded border-b-4 mb-5 lg:mb-0"
            style={{ borderColor: `${color}` }}
        >
            <div className="flex items-center justify-between mb-6">
                <div className={`text-5xl font-bold`} style={{ color: `${color}` }} >{count}</div>
                <div className={`text-3xl p-4 rounded`} style={{ backgroundColor: `${bcg}`, color: `${color}` }}>{Icon}</div>
            </div>
            <div>{title}</div>
        </div>
    );
};

export default StatsItem;