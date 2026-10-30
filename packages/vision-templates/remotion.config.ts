import {Config} from '@remotion/cli/config';

// Reels Instagram / TikTok (charte VISION) : 1080x1920, 30 fps, H.264 12–15 Mbps.
Config.setVideoImageFormat('jpeg');
Config.setOverwriteOutput(true);
Config.setCodec('h264');
Config.setVideoBitrate('14M');
