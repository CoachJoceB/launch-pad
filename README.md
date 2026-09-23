# Launch Pad

## AI material reader setup

The AI Material Reader in **Day Settings** and College Coursework syllabus parser use Anthropic's Claude API through the `parse-material` Supabase Edge Function. Your Anthropic key stays in the function's server environment; it is never saved in either page or the shared `command_center` table.

1. Install and sign in to the Supabase CLI, then link this folder to the Supabase project shown in `index.html` (`gwahlqvngjfhslqqprzl`).
2. Set the function secrets:

   ```sh
   supabase secrets set ANTHROPIC_API_KEY=your_anthropic_api_key AI_ACCESS_CODE=choose_a_private_code
   ```

3. Deploy the function:

   ```sh
   supabase functions deploy parse-material
   ```

4. In the Launch Pad page, open **Day Settings**, enter the same private AI access code, and save settings. That code is saved only in the current browser's local storage.

The reader accepts PDF, TXT, PNG, JPEG, and WebP files up to 4 MB. Convert Word or PowerPoint documents to PDF first. The generated lesson is saved to the chosen real week. If that is the current week, it is also applied to today's saved plan. Generated worksheet answers are separate for each selected student.

Under **Edit 4-Week Content Plan**, use the lesson selectors at the top to choose and apply a saved History, Science, or other parsed lesson to today's saved plan.
