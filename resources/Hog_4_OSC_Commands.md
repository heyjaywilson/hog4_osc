# OSC Commands

## Playback

Use these commands to go, halt, resume, and release playback items not tied to buttons on the console.

| Hog 4 OS | OSC Command Path | Data | Example |
|----|----|----|----|
|Go cuelist | `/hog/playback/go/0` | list_number | `/hog/playback/go/0/1` Goes CUELIST 1 |
|Go cue in cuelist | `/hog/playback/go/0` | list_number.cue_number | `/hog/playback/go/0/1.5` Goes CUELIST 1 CUE 5 |
|Halt cuelist | `/hog/playback/halt/0` | list_number | `/hog/playback/halt/0/1` Halts CUELIST 1 |
|Resume halted cuelist | `/hog/playback/resume/0` | list_number | `/hog/playback/resume/0/1` Resumes CUELIST 1 |
|Release cuelist | `/hog/playback/release/0` | list_number | `/hog/playback/release/0/1` Releases CUELIST 1 
|Go scene | `/hog/playback/go/1` | scene_number | `/hog/playback/go/1/1` Goes SCENE 1 |
|Halt scene | `/hog/playback/halt/1` | scene_number | `/hog/playback/halt/1/1` Halts SCENE 1 |
|Release scene | `/hog/playback/release/1` | scene_number | `/hog/playback/release/1/1` Releases SCENE 1 |
|Go macro | `/hog/playback/go/2` | macro_number | `/hog/playback/go/2/1` Goes Macro 1 |
|Halt macro | `/hog/playback/halt/2` | macro_number | `/hog/playback/halt/2/1` Halts Macro 1 |
|Release macro | `/hog/playback/release/2` | macro_number | `/hog/playback/go/2/1` Releases Macro 1 |

## Midi Note Mappings

| Hog 4 OS | OSC Command Path | Data | Example |
|----|----|----|----|
| Midi note on | `/hog/midi/on/channel_number/note_number` | velocity | `/hog/on/midi/on/0/1/2` |
| Midi note off | `/hog/midi/off/channel_number/note_number` | velocity | `/hog/off/midi/on/0/1/2` |

## Hardware Mappings

| Hog 4 OS | OSC Command Path | Data | Example |
|----|----|----|----|
| Choose keys | `/hog/hardware/choose/master_number` | 0 = button up | `/hog/hardware/choose/1/0` releases the button |
||| 1 = button down | `/hog/hardware/choose/1/1` pushes the botton down |
| Go keys | `/hog/hardware/go/master_number` | 0 = button up | `/hog/hardware/go/1/0` releases the button |
||| 1 = button down | `/hog/hardware/go/1/1` pushes the botton down |
