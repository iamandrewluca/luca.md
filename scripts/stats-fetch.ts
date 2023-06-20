import { writeFile } from "node:fs/promises";
import { getAggregateContributions } from "./contributions";

async function main() {
	let result = await getAggregateContributions([
		{
			provider: "github",
			username: "iamandrewluca",
			origin: "https://github.com",
		},
		{
			provider: "gitlab",
			username: "iamandrewluca",
			origin: "https://gitlab.com",
		},
		{
			provider: "gitlab",
			username: "iamandrewluca",
			origin: "https://git.jagaad.com",
		},
	]);

	await writeFile("src/data.json", JSON.stringify(result), "utf-8");
}

main().catch((error) => console.error(error));

// fetch("https://git.jagaad.com/users/iamandrewluca/calendar.json")
// 	.then((response) => response.text())
// 	.then((data) => console.log(data));
