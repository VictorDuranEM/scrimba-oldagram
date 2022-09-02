//  Elements
const postImgs = document.getElementsByClassName("post-img")

const posts = [
	{
		name: "Vincent van Gogh",
		username: "vincey1853",
		location: "Zundert, Netherlands",
		avatar: "images/avatar-vangogh.jpg",
		post: "images/post-vangogh.jpg",
		comment: "just took a few mushrooms lol",
		likes: 21
	},
	{
		name: "Gustave Courbet",
		username: "gus1819",
		location: "Ornans, France",
		avatar: "images/avatar-courbet.jpg",
		post: "images/post-courbet.jpg",
		comment: "i'm feelin a bit stressed tbh",
		likes: 4
	},
	{
		name: "Joseph Ducreux",
		username: "jd1735",
		location: "Paris, France",
		avatar: "images/avatar-ducreux.jpg",
		post: "images/post-ducreux.jpg",
		comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
		likes: 152
	}
]

renderPosts()

function renderPosts() {
	let postsHTML = ""
	for (let i = 0; i < posts.length; i++) {
		let post = posts[i]
		postsHTML += `
		<header>
			<img class="logo" src="images/logo.png">
			<img class="avatar" src="images/user-avatar.png">
		</header>
	
		<main>
	
			<section>
				<div class="post-heading">
					<img class="avatar" src="${post.avatar}">
					<div>
						<h1 class="post-name">${post.name}</h1>
						<p class="post-location">${post.location}</p>
					</div>
				</div>
				<div class="post-img">
					<img name="${post.name}" src="${post.post}" alt="post image">
				</div>
			</section>
	
			<section class="interaction">
				<div class="interaction-btns">
					<button class="icon-btn"><img class="icon" src="images/icon-heart.png" alt="like button"></button>
					<button class="icon-btn"><img class="icon" src="images/icon-comment.png" alt="comment button"></button>
					<button class="icon-btn"><img class="icon" src="images/icon-dm.png" alt="message button"></button>
				</div>
				<p class="likes">${post.likes} likes</p>
				<p class="comment"><span>${post.username}</span> ${post.comment}</p>
			</section>
	
		</main>
		
		<hr style="background: #F5F5F5; height: 20px; border: none">
		`
	}
	document.body.innerHTML = postsHTML;
	
	addImgsEventListener()
}


function addImgsEventListener() {
	for (let i = 0; i < postImgs.length; i++) {
		let postImg = postImgs[i]
		postImg.addEventListener("dblclick", function(e) {
			increaseLikes(e.target.name)
		})
	}
}

function increaseLikes(postName) {
	for (let i = 0; i < posts.length; i++) {
		let post = posts[i]
		if (post.name === postName) {
			post.likes++
		}
	}
	renderPosts()
}

