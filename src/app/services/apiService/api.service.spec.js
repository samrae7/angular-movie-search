'use strict';
import api from './api.service';

describe('apiService', () => {
  let apiService,
    $rootScope,
    $http,
    $q,
    $httpBackend;
  let mockConfigResponse = {
    images: {
      base_url: 'foo',
      poster_sizes: [
        'size1',
        'size2',
        'size3',
        'size4'
      ]
    }
  };
  let mockBasePosterUrl = mockConfigResponse.images.base_url + mockConfigResponse.images.poster_sizes[3];

  beforeEach(() => {
    angular.mock.module(api);

    angular.mock.inject((
      _apiService_,
      _$rootScope_,
      _$q_,
      _$httpBackend_,
      _$http_
    ) => {
      apiService = _apiService_;
      $rootScope = _$rootScope_;
      $http = _$http_;
      $httpBackend = _$httpBackend_;
      $q = _$q_;
    });
  });

  describe('WHEN the apiService has been instantiated', () => {

    beforeEach(() => {
      $httpBackend.whenGET(/https:\/\/api.themoviedb.org\/3\/configuration.*/).respond(mockConfigResponse);
      $httpBackend.flush();
    });

    it('should be defined ', () => {
      expect(apiService).toBeDefined();
    });

    it('baseUrlForPosters should be defined ', () => {
      expect(apiService.baseUrlForPosters).toEqual(mockBasePosterUrl);
    });

    it('should be defined ', () => {
      expect(apiService.imagesConfig).toEqual(mockConfigResponse.images);
    });
  });

  describe('WHEN apiService.getMovies has been called', () => {
    let searchString = 'Ghostbusters';
    let result,
      apiResponse,
      transformedResponse;

    beforeEach(() => {
      apiResponse = {
        results: [
          {poster_path: '/foo'},
          {poster_path: '/bar'}
        ]
      };
      $httpBackend.whenGET(/https:\/\/api.themoviedb.org\/3\/configuration.*/).respond(mockConfigResponse);
      $httpBackend.expectGET(/https:\/\/api.themoviedb.org\/3\/search\/movie\?.*/).respond(apiResponse);
      transformedResponse = [
        {
          poster_path: '/foo',
          posterUrl: mockBasePosterUrl + '/foo'
        },
        {
          poster_path: '/bar',
          posterUrl: mockBasePosterUrl + '/bar'
        }
      ];
      apiService.getMovies(searchString)
        .then((movies) => result = movies);
    });

    it('should call the http service', () => {
      expect($httpBackend.flush).not.toThrow();
    });

    it ('should return a promise that resolves to the transformed API response', () => {
      $httpBackend.flush();
      expect(result).toEqual(transformedResponse);
    })
  });
});

