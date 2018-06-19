import 'jest';
import {netflixSearch} from '..';

it('should find Supernatural on netflix', () => {
  expect.assertions(1);
  return netflixSearch('play supernatural').then(data => expect(data.id).toEqual('70143825'));
});


it('should find Trailer Park Boys on netflix', () => {
  expect.assertions(1);
  return netflixSearch('i want to watch Trailer Park Boys').then(data => expect(data.id).toEqual('70153385'));
});