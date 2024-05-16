import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepositoriesComponent } from './repositories.component';
import { GithubService } from '../github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('RepositoriesComponent', () => {
  let component: RepositoriesComponent;
  let fixture: ComponentFixture<RepositoriesComponent>;
  let githubService: GithubService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoriesComponent],
      imports: [HttpClientTestingModule],
      providers: [GithubService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoriesComponent);
    component = fixture.componentInstance;
    githubService = TestBed.inject(GithubService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch repositories on init', () => {
    const repos = [
      { name: 'Repo 1', description: 'Description 1', topics: ['Angular'] },
    ];
    spyOn(githubService, 'getUserRepos').and.returnValue(of(repos));
    component.username = 'testuser';
    component.fetchRepos();
    expect(component.repositories).toEqual(repos);
  });

  it('should fetch profile on init', () => {
    const user = {
      avatar_url: 'https://example.com/avatar.png',
      name: 'Test User',
    };
    spyOn(githubService, 'getUser').and.returnValue(of(user));
    component.username = 'testuser';
    component.fetchProfile();
    expect(component.profile.avatar_url).toBe(user.avatar_url);
  });
});
