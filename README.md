# Netflix
An unofficially way to find movies/shows on netflix

### Usage
```
npm i SayMosaic/netflix --save
```

yarn won't work for how yarn is using `.npmignore`, see https://github.com/yarnpkg/yarn/issues/685

```
import {netflixSearch} from 'netflix';
netflixSearch('play supernatural'); // {id: '70143825', url: 'https://www.netflix.com/title/70143825'}
```


## License
Apache License 2.0