import JournalForm from "@/features/ui/JournalForm/JournalForm";
import RecipeUserForm from "@/features/ui/PecipeUserForm/PecipeUserForm";
export function JournalPage(): JSX.Element {
  return (
    <div>
      <JournalForm />
      <RecipeUserForm />
    </div>
  );
}


