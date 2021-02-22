import {
    renderPosts,
    elSelected,
    $searchPost
} from './asyncPosts.js';

renderPosts();

elSelected.addEventListener('change', () => {
    renderPosts();
});

$searchPost.addEventListener('input', () => {
    if ($searchPost.value != " ") {
        renderPosts();
    }
});