let companies: string[] = ["Amazon", "Microsoft"]

for (let i: number = 0; i < companies.length; ++i) {
    console.log(companies[i]);
}

companies.push("Apple");
console.log("")

for (let i: number = 0; i < companies.length; ++i) {
    console.log(companies[i]);
}