# YouTube video production plan (27 October 2026)

Companion to `youtube-monetization-plan-2026-10.md`. This says what Claude
produces, what Dave does, and how each video is assembled.

## The constraint that shapes everything

YouTube's "inauthentic content" policy targets mass-produced, templated or
automated videos. Fully AI-generated videos (synthetic voice over stock or
screenshot slideshows) are the pattern most likely to fail the YPP review, and
they would repeat the problem the trailer channel already has. So the split is:

- **Claude produces:** research, scripts, shot lists, on-screen text, captions,
  chapters, descriptions, thumbnails, editing instructions, and clean app
  footage.
- **Dave provides:** the human parts: voiceover in Dave's own voice (or on
  camera), the opinions and rankings, and the publishing.

A video where Dave speaks his own script over real app footage is original. A
video Claude renders end to end is not worth the risk.

## Tools available here

- ffmpeg, macOS `say`, python3 are installed on this Mac.
- iOS Simulator (control tool): Claude can drive the real ReelMatch app and
  screenshot it. `xcrun simctl io <device> recordVideo` can capture screen
  video. No iOS device is booted right now; one must be booted and the app
  built first.
- Android and two-account flows need real devices or a second simulator, so
  "two phones" shots are recorded by Dave.
- Web search is down in this session; fact checks (titles, streaming
  availability) must be verified before filming.

## Pipeline per video (about 90 minutes of Dave's time)

1. **Research (Claude, same day).** Confirm the search phrase with OpenSEO
   keyword data, check the top 3 existing videos, list what they miss. Output:
   one-page brief.
2. **Script (Claude).** Spoken-word script with timestamps, hook in the first
   10 seconds, the exact phrase in title, description, chapters and the first
   spoken line. Dave edits it into his own words: that edit is what makes it
   original.
3. **Shot list (Claude).** Table of screen, action, duration, on-screen text.
   Marks each shot as simulator-capturable, device-only or talking head.
4. **Footage (Claude where possible).**
   - Boot a simulator, build the app, script the taps through the control tool,
     and record with `simctl recordVideo` into the scratchpad.
   - Use test accounts only; no personal data on screen.
   - Anything needing two real people or Android is flagged for Dave.
5. **Voiceover (Dave).** Records in Voice Memos or QuickTime, one take per
   section. Claude can write pickup lines but doesn't voice them.
6. **Assembly (Claude with ffmpeg, or Dave in CapCut/iMovie).** Claude runs a
   scripted rough cut: trim, crop to 16:9 and 9:16, burn captions from the
   script, add chapter markers, normalize audio. Dave reviews and does the
   final pass.
7. **Package (Claude).** Title options, description with landing page link,
   chapters, tags, pinned comment, 3 thumbnail concepts, Short cut list.
8. **Publish (Dave).** Uploads, sets category and language, adds to playlist
   and end screens. Sends the video ID.
9. **Site follow-up (Claude, 10 minutes).** Adds the embed and VideoObject
   schema to the matching page, links from the hub, runs IndexNow.

## Batch schedule

| Week | Videos | Claude delivers up front |
|---|---|---|
| 1 | 1 (partner TV show how-to) | Script, shot list, simulator footage, thumbnails |
| 2 | 2 (group decision method) | Script, shot list, graphics for the veto and shortlist methods |
| 3 | 3 (this week's picks) | Research with verified availability, script |
| 4 | 4 (decision fatigue) | Script and sources |
| 5 to 10 | 5 to 10, one every week | Same pack each week |

Do video 1 first and review it before scripting the rest. Retention data from
video 1 changes the hooks of the others.

## Graphics

- Thumbnails: two phones side by side, big text, no faces or romance imagery.
  Claude builds them as HTML and exports with a headless browser, or as an
  image through Figma if wired up.
- Lower thirds and method diagrams: simple SVG or HTML rendered to PNG, then
  overlaid with ffmpeg.

## What Claude will not do

- Generate synthetic voices or fully automated videos for upload.
- Reupload trailers or build videos mostly of clips.
- Publish to YouTube or post comments.
- Claim ratings, user counts or availability it hasn't verified.

## Decisions needed from Dave

1. Voice: Dave's own voice, or on camera, or captions only.
2. Channel: a new channel for this series, or the existing one.
3. Which device to use for footage (a simulator that Claude can drive, or
   Dave's phone).
4. Build the app for the simulator now so video 1 footage can start.

## First actions on a yes

1. Create the video 1 pack in `docs/video-01/`: script, shot list, thumbnail
   concepts.
2. Boot an iOS simulator, build the app from the app repo, and test a
   recording with `simctl recordVideo`.
3. Report what footage is capturable and what Dave must record.
