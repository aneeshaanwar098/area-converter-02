function convert(event){
    event.preventDefault();

    console.log("function is running")

    let yards = document.querySelector("#inputYards").value;
    let squareFeets = yards * 9;

    console.log(yards)
    console.log(squareFeets)

    document.querySelector("#output").innerHTML = `${squareFeets} square feet`;
}