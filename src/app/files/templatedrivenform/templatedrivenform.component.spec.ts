import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Post } from './posts.model';
import { PostsService } from './posts.service';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { TemplatedrivenformComponent } from './templatedrivenform.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';

describe('TemplatedrivenformComponent', () => {
  let component: TemplatedrivenformComponent;
  let fixture: ComponentFixture<TemplatedrivenformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [PostsService],
      declarations: [ TemplatedrivenformComponent ],
      imports: [HttpClientTestingModule,ReactiveFormsModule,
        FormsModule]
    })
    .compileComponents();
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(TemplatedrivenformComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(TemplatedrivenformComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the fetchPost from the service', () => {
    const expectedDetails: Post[] =
    [{ name: 'A', email: 'a.test.com' }, { name: 'B', email: 'b.test.com' }];

    let fixture = TestBed.createComponent(TemplatedrivenformComponent);
    let app = fixture.debugElement.componentInstance;
    let postService  = fixture.debugElement.injector.get(PostsService);
    postService.fetchPost().subscribe( expectedDetails => {
     expect(expectedDetails[0].name).toEqual('A');
   })
    
  });

  it('should display the details in template correctly', () => {
    let fixture = TestBed.createComponent(TemplatedrivenformComponent);
    let app = fixture.debugElement.componentInstance;
    let postService  = fixture.debugElement.injector.get(PostsService);
    fixture. detectChanges();
    // here nativeelement is our template
    let compiled = fixture.debugElement.nativeElement;
    app.loadedPosts = [{ name: 'A', email: 'a.test.com' }, { name: 'B', email: 'b.test.com' }];
    // if(app.loadedPosts.length  < 1){
      expect(compiled.querySelector('p').textContent).toContain('No posts available!');
    // }
    // else{
      // expect(compiled.querySelector('p').textContent).toContain(app.loadedPosts.name);
  // }
  })
});
