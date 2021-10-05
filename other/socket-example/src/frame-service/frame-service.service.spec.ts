import { Test, TestingModule } from '@nestjs/testing';
import { FrameServiceService } from './frame-service.service';

describe('FrameServiceService', () => {
  let service: FrameServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrameServiceService],
    }).compile();

    service = module.get<FrameServiceService>(FrameServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
