# Project Instructions

This is a VitePress high school study notes project.

## Mistake notes

When I ask you to add a mistake problem:

1. Read the supplied image.
2. Transcribe the problem faithfully.
3. Convert mathematical and chemical formulas to LaTeX.
4. Use Traditional Chinese.
5. Save the problem Markdown file under `docs/mistakes/<subject>/<topic>/`.
6. Save the problem image under `docs/mistakes/<subject>/<topic>/img/`.
7. Use the same topic for the directory name and the YAML `topic` field.
8. If the topic cannot be determined confidently, save the note under `docs/mistakes/<subject>/未分類/` and leave the YAML `topic` field blank.
9. After adding a mistake note, update the VitePress sidebar and `docs/mistakes/index.md`.

## Mistake Notes Rules

When creating a new mistake note, always use the following YAML frontmatter:

```text
---
id: <subject-prefix>-<000>
subject: <subject>
topic:
date: YYYY-MM-DD
mistake_type:
status: need-review
review_count: 0
---
```

### Frontmatter Rules

Do not add, remove, or rename any frontmatter fields unless the user explicitly asks.

#### id

Format:

```text
<subject-prefix>-<000>
```

Examples:

```text
che-001
che-002
math-001
phy-001
bio-001
```

Subject prefix mapping:

- chemistry -> che
- mathematics -> math
- physics -> phy
- biology -> bio

Before creating a new mistake note:

1. Search existing mistake notes with the same subject prefix.
2. Find the largest existing number.
3. Add 1.
4. Pad the number to 3 digits.

Example:

If the existing chemistry IDs are:

che-001
che-002
che-004

the next ID must be:

che-005

Do not determine the next ID by counting files.

#### subject

Use one of:

- chemistry
- mathematics
- physics
- biology

#### topic

Use the most relevant chapter or concept in `notes/<subject>/xx知識點.json`.

Examples:

```text
酸鹼度
pH與pOH
三角函數應用
```

If the topic cannot be determined confidently, leave it blank.

#### date

Use the date when the mistake note is created.

Format:

YYYY-MM-DD

#### mistake_type

Use the main reason for the mistake written in `docs/工具/錯題類型`

If the mistake reason cannot be determined confidently, leave it blank.

#### status

Every new mistake note must start with:

need-review

#### review_count

Every new mistake note must start with:

0

### H1

For `# <subject>-<000>` in `錯題模板`, please write the id in it.

### 題目

Please put the problem statement here.

### 解法

Please put the solution to the problem here.

## Validation

After editing the site, run:

npm run docs:build

If the process succeed, please remove all the stuff in `docs/.vitepress/.temp/`.
