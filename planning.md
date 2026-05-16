## Block A — Project setup (1 sitting)

- ~~Pick your stack and scaffold the project. React + Vite is my recommendation if you don't already have a preference — fastest from npm create to "something on the screen." Get the dev server running, see the default page, commit to git. Done when: you can edit a file and see the change hot-reload.~~
- ~~Drop in fonts and color tokens. Add the Lora + Nunito Google Fonts link. Create a tokens.css (or styled-components theme, or whatever) with your sand, sage, honey, brick, ink, and supporting colors as CSS variables. Done when: you can use var(--color-sage) anywhere in your styles.~~
- ~~Load the mock JSON. Drop anchors-mock.json into your project. Import it, log it to console, confirm the data is there. Done when: you can console.log(tasks[0].name) and see "Client Work."~~

## Block B — Static UI (2-3 sittings)

- Build the page shell. Sand background, the header with date + "Today's blocks" + the "X of 16 stacked" line. Hardcode the values for now. Done when: the header looks right on its own with no tasks below it.
  - TSX ✅
  - CSS ✅
- Build the labels component, loop through the labels with their associated color
  - TSX ✅
  - CSS ✅
- Build a single TaskCard component — not started state only. Take one task from the JSON and render it as the white rounded card. Status circle, name, "0 / 15 min" line, the + button, the 3px bottom progress bar at 0%. Done when: one card renders and looks like the mockup.
  - TSX ✅
  - CSS ✅
- Render all states from props, no interactions yet. Make the card handle all four states (not started, in progress, complete, overflow) based on the loggedMinutes and goalMinutes props. Manually edit the JSON to test each state. The status circle, progress bar fill, and color changes should all derive from the data. Done when: you can change any task's loggedMinutes in the JSON and the card updates correctly.
- Render the full list. Map over the tasks array, render a TaskCard for each. Done when: all 16 tasks show up as a scrollable list.

## Block C — The log interaction (2 sittings)

- Set up state for the tasks. Move the tasks data from the static JSON into React state (useState). The list should still render the same. Done when: nothing visibly changed but the data lives in state now.
- Build the input swap. When you tap the + button on a card, it swaps to the input field + Log button + brick outline on the row. Tap outside or hit escape to dismiss back to +. No actual logging yet. Done when: you can open and close the input on any card.
- Wire up Log. Hitting Log (or Enter) adds the typed number to that task's loggedMinutes, recalculates status, and the progress bar/circle/color updates. Input closes. Done when: you can tap +, type 10, hit Log, and watch a card go from 0/15 to 10/15 with the bar filling to 67%.
- Update the header counter. "X of 16 stacked" should reflect the actual count of complete tasks. Done when: completing a task bumps the number.

## Block D — Persistence (1 sitting)

- Save to localStorage on every change. When tasks state updates, write it to localStorage. On page load, read from localStorage if it exists, otherwise fall back to the mock JSON. Done when: you log time, refresh the page, and your progress is still there.
- Add a reset button somewhere small. A discreet "reset day" link at the bottom that clears localStorage and reloads the mock data. You'll want this constantly while building. Done when: you can wipe state and start fresh.
