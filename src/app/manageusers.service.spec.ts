import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ManageusersService } from './manageusers.service';

describe('ManageusersService', () => {
  let service: ManageusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ManageusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
