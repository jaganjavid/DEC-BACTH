
class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }

    // Display the user profile

    showProfile(user) {

        if (user.message === "Not Found") {
            this.profile.innerHTML = "<h1>User not found</h1>"
        } else {
            this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                    <img width="100%" src=${user.avatar_url} alt="">
                    <a href=${user.html_url} class="btn btn-dark">View Profile</a>
                    </div>
                    <div class="col-md-9">
                    <span class="badge bg-primary">
                        Public Repos : ${user.public_repos}
                    </span>
                    <span class="badge bg-primary">
                        Followers : ${user.followers}
                    </span>
                    <span class="badge bg-primary">
                        Following : ${user.following}
                    </span>
                    </div>
                </div>
                </div>
            `
        }


    }

    clearProfile(){
        this.profile.innerHTML = "";
    }
}