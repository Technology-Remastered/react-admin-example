const greekMessages = {
    ra: {
        action: {
            add_filter: 'Προσθήκη φίλτρου',
            add: 'Προσθήκη',
            back: 'Πίσω',
            bulk_actions: '1 στοιχείο επιλέχθηκε |||| %{smart_count} στοιχεία επιλέχθηκαν',
            cancel: 'Ακύρωση',
            clear_input_value: 'Καθάρισμα τιμής',
            clone: 'Αντιγραφή',
            confirm: 'Επιβεβαίωση',
            create: 'Δημιουργία',
            delete: 'Διαγραφή',
            edit: 'Επεξεργασία',
            export: 'Εξαγωγή',
            list: 'Λίστα',
            refresh: 'Ανανέωση',
            remove_filter: 'Αφαίρεση φίλτρου',
            remove: 'Αφαίρεση',
            save: 'Αποθήκευση',
            search: 'Εύρεση',
            show: 'Προβολή',
            sort: 'Ταξινόμηση',
            undo: 'Αναίρεση',
            unselect: 'Αποεπιλογή',
            expand: 'Επέκταση',
            close: 'Κλείσιμο',
            open_menu: 'Άνοιγμα μενού',
            close_menu: 'Κλείσιμο μενού',
        },
        boolean: {
            true: 'Ναι',
            false: 'Όχι',
            null: ' ',
        },
        page: {
            create: 'Δημιουργία %{name}',
            dashboard: 'Πίνακας ελέγχου',
            edit: '%{name} #%{id}',
            error: 'Κάτι πήγε στραβά',
            list: '%{name}',
            loading: 'Φόρτωμα',
            not_found: 'Δε βρέθηκε',
            show: '%{name} #%{id}',
            empty: 'Κανένα %{name} ακόμα.',
            invite: 'Θέλετε να προσθέσετε ένα;',
        },
        input: {
            file: {
                upload_several:
                    'Ρίξτε μερικά αρχεία εδώ για ανέβασμα, ή κάνετε κλικ για να επιλέξετε ένα.',
                upload_single: 'Ρίξτε ένα αρχείο για ανέβασμα, ή κάνετε κλικ για να το επιλέξετε.',
            },
            image: {
                upload_several:
                    'Ρίξτε μερικές εικόνες εδώ για ανέβασμα, ή κάνετε κλικ για να επιλέξετε μία.',
                upload_single:
                    'Ρίξτε μία εικόνα για ανέβασμα, ή κάνετε κλικ για να την επιλέξετε.',
            },
            references: {
                all_missing: 'Τα αναφερόμενα στοιχεία δε βρέθηκαν.',
                many_missing:
                    'Τουλάχιστον ένα εκ των αναφερόμενων στοιχείων δεν είναι διαθέσιμο.',
                single_missing:
                    'Ένα αναφερόμενο στοιχείο δεν είναι διαθέσιμο.',
            },
            password: {
                toggle_visible: 'Κρύψε τον κωδικό',
                toggle_hidden: 'Δείξε τον κωδικό',
            },
        },
        message: {
            about: 'Σχετικά',
            are_you_sure: 'Σίγουρα;',
            bulk_delete_content:
                'Σίγουρα θέλετε να διαγράψετε αυτό το στοιχείο; |||| Σίγουρα θέλετε να διαγράψετε αυτά τα %{smart_count} στοιχεία;',
            bulk_delete_title:
                'Διαγραφή στοιχείου |||| Διαγραφή %{smart_count} στοιχείων',
            delete_content: 'Σίγουρα θέλετε να διαγράψετε αυτό το στοιχείο;',
            delete_title: 'Διαγραφή στοιχείου #%{id}',
            details: 'Λεπτομέρειες',
            error: "Συνέβη σφάλμα και το αίτημά σας δε μπόρεσε να ολοκληρωθεί.",
            invalid_form: 'Η φόρμα δεν είναι έγκυρη. Ελέγξτε για σφάλματα.',
            loading: 'Η σελίδα φορτώνει, παρακαλώ περιμένετε',
            no: 'Όχι',
            not_found:
                'Η διεύθυνση δεν υπάρχει.',
            yes: 'Ναι',
            unsaved_changes:
                "Κάποιες αλλαγές σας δεν αποθηκεύτηκαν. Σίγουρα θέλετε να συνεχίσετε;",
        },
        navigation: {
            no_results: 'Δε βρέθηκαν αποτελέσματα',
            no_more_results:
                'Η σελίδα %{page} είναι εκτός ορίων. Δοκιμάστε την προηγούμενη.',
            page_out_of_boundaries: 'Σελίδα %{page} εκτός ορίων',
            page_out_from_end: 'Δε γίνεται προχωρήσετε περαιτέρω',
            page_out_from_begin: 'Δε γίνεται να πάτε πιο πίσω',
            page_range_info: '%{offsetBegin}-%{offsetEnd} από %{total}',
            page_rows_per_page: 'Στοιχεία ανά σελίδα:',
            next: 'Επόμενο',
            prev: 'Προηγούμενο',
        },
        sort: {
            sort_by: 'Ταξινόμηση ανά %{field} %{order}',
            ASC: 'αύξουσα',
            DESC: 'φθίνουσα',
        },
        auth: {
            auth_check_error: 'Συνδεθείτε για να συνεχίσετε',
            user_menu: 'Προφίλ',
            username: 'Όνομα χρήστη',
            password: 'Κωδικός',
            sign_in: 'Σύνδεση',
            sign_in_error: 'Η σύνδεση απέτυχε, προσπαθήστε ξανά',
            logout: 'Αποσύνδεση',
        },
        notification: {
            updated: 'Το στοιχείο ενημερώθηκε |||| %{smart_count} στοιχεία ενημερώθηκαν',
            created: 'Το στοιχείο δημιουργήθηκε',
            deleted: 'Το στοιχείο διεγράφη |||| %{smart_count} στοιχεία διεγράφησαν',
            bad_item: 'Λάθος στοιχείο',
            item_doesnt_exist: 'Το στοιχείο δεν υπάρχει',
            http_error: 'Σφάλμα επικοινωνίας διακομιστή',
            data_provider_error:
                'Σφάλμα dataProvider. Ελέγξτε την κονσόλα για λεπτομέρειες.',
            i18n_error:
                'Δε βρέθηκαν οι μεταφράσεις για τη ζητούμενη γλώσσα',
            canceled: 'Η ενέργεια ακυρώθηκε',
            logged_out: 'Η συνεδρία σας έληξε, παρακαλώ συνδεθείτε ξανά.',
        },
        validation: {
            required: 'Απαιτείται',
            minLength: 'Πρέπει να έχει τουλάχιστον %{min} χαρακτήρες',
            maxLength: 'Πρέπει να έχει έως %{max} χαρακτήρες',
            minValue: 'Πρέπει να είναι τουλάχιστον %{min}',
            maxValue: 'Πρέπει να είναι έως %{max}',
            number: 'Πρέπει να είναι αριθμός',
            email: 'Πρέπει να είναι έγκυρη διεύθυνση email',
            oneOf: 'Πρέπει να είναι ένα εκ των: %{options}',
            regex: 'Πρέπει να ταιριάζει στο φορματ (regexp): %{pattern}',
        },
    },
};

export default greekMessages;