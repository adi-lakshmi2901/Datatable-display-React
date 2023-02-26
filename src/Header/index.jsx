export default function({onSearch}){
    return (<div>
        <h2>Data Table</h2>
        <input id="search-bar" type="text" placeholder="Search..." onChange={onSearch}/>
    </div>);
}