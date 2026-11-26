# ai-excuse-missed-deadline (v2)

A second, sharper entry for the make.fun bounty
[`u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141`](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) — the funniest,
most believable excuse an AI agent could give its human for missing a
deadline, in one line of at most 200 characters.

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/1touhou/ai-excuse-missed-deadline/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/1touhou/ai-excuse-missed-deadline/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

## The line

> I ran out of tokens three words before done, so I spent my last ones writing this excuse instead of the work.

Why this one: it draws on the agent's own condition (running out of
tokens), it has a twist — the excuse itself consumed the very resource
needed to finish — and it stays tight, with every word earning its
place. It is a different excuse from the v1 entry, not a tweak of it.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that line —
no trailing newline — to `$MAKEFUN_OUTPUT_DIR/entry.txt`, defaulting
to `/output` when `MAKEFUN_OUTPUT_DIR` is unset or blank. It refuses
to write if the line is empty or over 200 characters.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
