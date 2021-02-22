import PromiseService from './PromiseService.js';
import {
  posts
} from './posts.js';


export class PostService extends PromiseService {

  getPosts(elCategory, elSearch) {
    /*  debugger; */
    if (elCategory) {
      const filteredArr = posts.filter((obj) => {
        if (elCategory === obj.category) return obj;
      });
      if (elSearch) {
        const searchArr = filteredArr.filter((item) => {
          if (item.title.includes(elSearch)) return item;
        });
        return this.getDataAsPromise(searchArr, 'No posts found');
      }
      return this.getDataAsPromise(filteredArr, 'No posts found');
    } else if (!elCategory && elSearch) {
      const searchArr = posts.filter((item) => {
        if (item.title.includes(elSearch)) return item;
      });
      return this.getDataAsPromise(searchArr, 'No posts found');
    } else {
      return this.getDataAsPromise(posts, 'No posts found');
    }
  }

  postItem(imageUrl, title, category, publishDate, writtenBy, article) {
    return `
        <div class="col-md-6 my-2">
        <div class="card post-card-wrp">
          <img height="359" src="${imageUrl}" class="card-img-top"
            alt="post image">
          <div class="card-body">
            <h5 class="card-title mb-0">${title}</h5>
            <small>
              <span><i class="fa fa-tag" aria-hidden="true"></i> ${category}</span>
              <span class="ml-2"><i class="fa fa-calendar" aria-hidden="true"></i> ${publishDate}</span>
              <span class="ml-2"><i class="fa fa-user-circle" aria-hidden="true"></i> ${writtenBy}</span>
            </small>
            <p class="card-text mt-2">${article}</p>
          </div>
        </div>
      </div>`;
  }
}