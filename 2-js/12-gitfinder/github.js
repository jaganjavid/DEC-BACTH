class GitHub {
    constructor() {
        this.client_id = "Ov23liUoSpszZh1W0tzN";
        this.client_secret = "9f95a725daf5c0009c76d3b41f9a2edf72871d3d";
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();

        console.log(profile);
        return profile;
    }
}


// const test = new GitHub();

// test.getUser("jaganjavid")


