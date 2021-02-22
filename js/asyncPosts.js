import {
    PostService,
} from './PostService.js';

export const elSelected = document.getElementById('category-picker');
export const $searchPost = document.getElementById('search-posts-field');
const postService = new PostService();

const $postsRow = document.getElementById('posts-row');

export async function renderPosts() {

    try {
        const posts = await postService.getPosts(elSelected.value, $searchPost.value);
        $postsRow.innerHTML = '';

        posts.forEach(post => {
            const {
                imageUrl,
                title,
                category,
                publishDate,
                writtenBy,
                article
            } = post;

            $postsRow.innerHTML += postService.postItem(imageUrl, title, category, publishDate, writtenBy, article);
        });
    } catch (err) {
        $postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
    }
}