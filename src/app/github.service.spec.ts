// github.service.spec.ts

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppModule } from './app.module'; // Import AppModule
import { GithubService } from './github.service';

describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, AppModule], // Include AppModule and HttpClientTestingModule in imports
      providers: [GithubService],
    });
    service = TestBed.inject(GithubService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user details', () => {
    const dummyUser = {
      login: 'testuser',
      avatar_url: 'https://example.com/avatar.png',
    };
    service.getUser('testuser').subscribe((user) => {
      expect(user.login).toBe('testuser');
    });
    const req = httpMock.expectOne(`https://api.github.com/users/testuser`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUser);
  });

  it('should fetch user repos', () => {
    const dummyRepos = [{ name: 'Repo 1', description: 'Description 1' }];
    service.getUserRepos('testuser', 1, 10).subscribe((repos) => {
      expect(repos.length).toBe(1);
      expect(repos[0].name).toBe('Repo 1');
    });
    const req = httpMock.expectOne(
      `https://api.github.com/users/testuser/repos?page=1&per_page=10`
    );
    expect(req.request.method).toBe('GET');
    req.flush(dummyRepos);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
